import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Button } from 'react-native';
import db from '../config';

export default class Attendance extends React.Component{
  constructor(){
    super();
    this.state={
      studentsList:[],
    };
  }

   async list(){
     var students=[]
     var class_ref= await db.ref('/').on('value',(data) => {
      var class_a = data.val()
      for (var student in class_a){
        students.push(class_a[student]);
        class_a[student]['className'] = student;
      }
      students.sort(function(a,b){
        return a.roll_no - b.roll_no;
      });
      this.setState({studentsList: students})
    });
  }

  updateAttendance(roll_no, status){
    var id = '';
    if(roll_no <= 9){
      id = '0' + roll_no;
    } else {
      id = roll_no;
    }

    var today = new Date();
    var dd = today.getDate();
    var mm  = today.getMonth();

    var yyyy = today.getFullYear();
    if(dd < 10){
      dd = '0' + dd;
    }
     if(mm < 10){
      mm = '0' + mm;
    }

    today = dd + '-' + mm + '-' +  yyyy;
    var ref_path = id;
    var class_ref = db.ref(ref_path);
    class_ref.update({
      [today]: status,
    })
  }

  componentDidMount(){
     this.list();
  }

  render(){
    return(
      <View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {this.state.studentsList.map((student) => (
            <View
              style={{
                margin: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text>{student.studentsList.toUpperCase()}</Text>
            </View>
          ))}
        </View>
      </View>
    );
  }
}
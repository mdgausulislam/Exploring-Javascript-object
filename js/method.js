const student={
    name:'hemonto',
    money:4555,
    study:'cse',
    subjects:['calculus','algebra','geometric'],
    exam:function(){
        console.log(this.name,'is participating in an exam');
    }
}
student.exam();
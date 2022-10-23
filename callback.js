function explain_callback(Name,age,task){
    console.log('hello',Name,);
    console.log('I am ',age,'Years old');
    task();
}

function works(){
    console.log('wash hand with shop')

}
function study(){
    console.log('You read the book')
}

explain_callback('Nazmul Hasun',22,works);
explain_callback('Sowrub mojumder',20,study);
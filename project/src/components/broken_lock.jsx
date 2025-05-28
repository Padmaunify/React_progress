function Clock({time}){
    let hrs=time.getHours();
    let classname;
    if(hrs>=0 && hrs<=6){
        classname="night";
    }
    else{
        classname="day";
    }
    return (
        <h1 classname={classname}>{time.LocaleTimeString()}</h1>

    );
}
export default Clock
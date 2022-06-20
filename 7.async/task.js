 class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.timerId = null;
  }

  addClock(time, callback, id) {

    if(typeof id === "undefined") {
      throw new Error("error text")
    } else if(typeof this.alarmCollection.find((item) => item.id === id) !== "undefined") {
      return console.error("Ошибка! Такой id уже задан");
  } else return this.alarmCollection.push({id, time, callback});
  }
  
 removeClock(id){
  if(this.alarmCollection.some(item=> item.id == id)){ 
    this.alarmCollection.splice(this.alarmCollection.findIndex(item => item.id == id),1)
     return true
  } else return false
  
}

getCurrentFormattedTime() {
 return new Date().toLocaleTimeString("ru-Ru", {
  hour: "2-digit",
  minute: "2-digit"
 });
}

start(){
 let checkClock = (alarmClockRinging) =>  {
   if (alarmClockRinging.time === this.getCurrentFormattedTime()) {
     return alarmClockRinging.callback();
   }
}
  if(this.timerId === null) {
      let interval = setInterval( () => {
      this.alarmCollection.forEach(item => checkClock(item))
    }, 1000);
      this.timerId = interval;
  }
}

 stop() {
  if(this.timerId !== null) {
    clearInterval(this.timerId);
    return this.timerId = null;
  }
 }

printAlarms () {
    return this.alarmCollection.forEach(item => console.log(item.id + ': ' + item.time));
  }
  
clearAlarms() {
  this.stop();
  this.alarmCollection = [];
}
}

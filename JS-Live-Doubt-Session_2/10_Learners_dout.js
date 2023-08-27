
const cap = {
    name: "Steve",
    
    sayHi: function(){
        console.log("53", this.name); //  53 Steve

        function iAmInner(){
            console.log("55", this.name); // 55 undefined
        }
        iAmInner()
    }
}

cap.sayHi();

/***
 * 
 * Need to connect with scaler team to make it correct in answer.
 * HW question -> https://www.scaler.com/academy/mentee-dashboard/class/82706/assignment/problems/59693?navref=cl_tt_lst_nm expect answer "53 Steve 55 Steve"
 */
 function throttle(func,delay){
    let isThrottled = false;
    return function (){
       if(!isThrottled){ // true
            func(); // logMessage() -> // Throttled function called
            isThrottled = true;
            setTimeout(()=>{
                isThrottled = false;
            },delay);
        }
    }
}
function logMessage(){
    console.log("Throttled function called");
} 
const throttleFun = throttle(logMessage,500); 
throttleFun();
setTimeout(throttleFun,200);
setTimeout(throttleFun,400);

// output would be: Throttled function called -> only single time will be called rest 2 will be skipped, why??
/**
 * Reason: the next setTimeout(throttleFun, 200) and setTimeout(throttleFun, 400) are scheduled to execute throttleFun after 200 and 400 milliseconds respectively.
 * However, when these setTimeout calls occur, isThrottled = true due to the initial execution of throttleFun. 
 * As a result, the condition in the if block (if(!isThrottled)) is not met, and the inner func() (i.e., logMessage()) is not called. 
 */
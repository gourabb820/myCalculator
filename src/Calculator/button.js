import react from "react";
import "./button.css";
let Button = (props) => {
  return (
    <button
      className="my-button"
      onClick={() => {
        //find props value prev
        props.setValue((prev) => {
          // //find prev digit number
          console.log(prev);
          if (props.value === "AC") {
            // console.log('hi',props.value)
            return { val: 0, opt: null };
          }
          // // console.log(prev,props.value.opt)
          // else if (props.value === "+") {
          //   return {
          //     val: prev.val.toString() + "+",
          //     opt: "+",
          //     result: prev.result,
          //   };
          // } else if (prev.opt) {
          //   // return {val:prev.val+props.value,opt:null}
          //   // console.log(prev)
          //   let result;
          //   if (prev.opt === "+") {
          //     result = prev.result + props.value;
          //   }
          //   return {
          //     val: prev.val.toString() + props.value.toString(),
          //     opt: null,
          //     result: result,
          //   };
          // }
          else if(props.value==='='){
            return {
              val: eval(prev.val),
              opt: null,
              result:  eval(prev.val),
            };
          }
          else {
            let newValue = prev.val
              ? prev.val.toString() + props.value.toString()
              : props.value;
            return {
              val: newValue,
              opt: null,
              result: prev.val * 10 + props.value,
            };
          }
        });
      }}
    >
      {props.value}
    </button>
  );
};

export default Button;

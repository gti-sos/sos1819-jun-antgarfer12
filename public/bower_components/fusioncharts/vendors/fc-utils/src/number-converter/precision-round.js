import exponent from'./exponent';const precisionRound=(a,b)=>{var c=Math.abs;return a=c(a),b=c(b)-a,Math.max(0,exponent(b)-exponent(a))+1};export default precisionRound;
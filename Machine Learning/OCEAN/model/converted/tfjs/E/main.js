//B     -> SOMEWHAT EXTROVERT
//A     -> EXTROVERT
//S     -> VERY EXTROVERT
//SS    -> ABSOLUTELY EXTROVERT
//nSS   -> ABSOLUTELY INTROVERT
//nS    -> VERY INTROVERT
//nA    -> INTROVERT
//nB    -> SOMEWHAT INTROVERT
let tier_object = ['A', 'nS', 'SS', 'nA', 'nB', 'nS', 'nA', 'nSS', 'B', 'B', 'S', 'S', 'A', 'nB', 'nSS'];
let tier_meaning = {
    0:'EXTROVERT',
    1:'VERY INTROVERT',
    2:'ABSOLUTELY EXTROVERT',
    3:'INTROVERT',
    4:'SOMEWHAT INTROVERT',
    5:'VERY INTROVERT',
    6:'INTROVERT',
    7:'ABSOLUTELY INTROVERT',
    8:'SOMEWHAT EXTROVERT',
    9:'SOMEHWAT EXTROVERT',
    10:'VERY EXTROVERT',
    11:'VERY EXTROVERT', 
    12:'EXTROVERT',
    13:'SOMEWHAT INTROVERT',
    14:'ABSOLUTELY INTROVERT'
}

/* 
user answer from question 1 to 10.
remember, the answer is a multiple choice (1-5) where 1 is strongly disagree and 5 is strongly agree
*/
let name = 'Bambang'
let user_ans = [1,5,3,4,2,5,3,4,1,5] 

let s = tf.loadLayersModel('model.json').then(
    function(model) {
        var predicted_tensor = model.predict(tf.tensor2d(user_ans,[1,10]));
        var cluster = tf.argMax(predicted_tensor, 1).dataSync();
	  alert(name + " is " + tier_meaning[cluster]);
    }
);
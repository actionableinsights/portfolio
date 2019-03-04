import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));

// class Animal {
//     //set properties
//     constructor (name, age) {
//         this.name= name;
//         this.age= age;
//     }

//     speak () {
//         console.log('I am ', this.name, 'I am ',  this.age, ' old');
//     }
// }

// class Lion extends Animal {

//     constructor(name, age, furColor, speed){
//         super (name, age);
//         this.furColor = furColor;
//         this.speed = speed;
    
//     }

//     roar(){
//         console.log('ROAAR', this.furColor, this.speed);
//     }


// }

// const animal1 = new Animal('Billy', 111);
// animal1.speak();
// const animal2 = new Animal('Billy', 111);
// const lion1 = new Lion('Mufasa', 11, 'blue', 10);
// lion1.roar();
// lion1.speak();
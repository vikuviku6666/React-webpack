import isEmail from 'validator/lib/isEmail';
import tripleMe from './tripleMe';
console.log(isEmail('vk@text.com'));
console.log(tripleMe(900));
document.querySelector('h1').textContent = 'hi to my new  app'


if (module.hot) {
    module.hot.accept()
}
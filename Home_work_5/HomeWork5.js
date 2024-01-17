
// 1) створити 3 обʼєкти через {}

const obj1 = {
    name: 'Joanne',
    gender: 'female'
}
console.log(obj1);

const obj2 = {
    name: 'Kate',
    age: 35
}
console.log(obj2);

const obj3 = {
    name: 'Mike',
    hobby: 'Art'
}
console.log(obj3);


// 2) створити 3 обʼєкти через Object()

const obj4 = new Object();
const obj5 = new Object( {name: 'Adam', surname: 'Smith'} );
const obj6 = new Object()

obj4.name = 'Mary'
obj4.job = 'Teacher'

obj6['text'] = 'Some text is added'
obj6['additional property'] = 'My new property'

console.log(obj4);
console.log(obj5);
console.log(obj6);


// 3) створити обʼєкт на базі протиту іншого обʼєку (Object.create(інший_оʼєкт), або через __prototype__), створити по одному в кожному форматі

const car = {
    model: 'standard',
    comfort: 'medium'
}

const car1 = Object.create(car);
console.log(car1);                  // returns empty object as car1 is empty with the car as a prototype
console.log(car1.model);            // returns standard
console.log(car1.comfort);            // returns medium
car1.property = 'Property for car1'
console.log(car1); 


const protoObj = {
    greet: function() {
      console.log("Hello Kate!");
    }
  };
  
const object2 = {};
object2.__proto__ = protoObj;
  
object2.greet();
  
console.log(object2);



// 4) створити обʼєкт engineer, від нього унаслідувати QA_engineer, вивести деталі по всім полям (engineer, QA_engineer)
// 5) унаслідувати ваш існуючий engineer від person. вивести значення всіх 3х обʼєктів

const person = {
    type: 'human',
    alive: true
}


const engineer = Object.create(person);
engineer.sphere = 'IT technologies',
engineer.educationLevel = 'bachelor degree'


const qaEngineer = Object.create(engineer);


console.log(person);
console.log(person.type);
console.log(person.alive);

console.log(engineer);
console.log(engineer.sphere);
console.log(engineer.educationLevel);
console.log(engineer.type);
console.log(engineer.alive);

console.log(qaEngineer);
console.log(qaEngineer.sphere);
console.log(qaEngineer.educationLevel);
console.log(qaEngineer.type);
console.log(qaEngineer.alive);



/*
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, 
and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
Merge nums1 and nums2 into a single array sorted in non-decreasing order.
The final sorted array should not be returned by the function, but instead be stored inside the array nums1.
To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, 
and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

Example 2:

Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].

Example 3:

Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
*/

function merge(nums1, m, nums2, n) {
    let i = m - 1; // Pointer for nums1
    let j = n - 1; // Pointer for nums2
    let k = m + n - 1; // Pointer for the merged array (nums1)

    // Compare and merge elements from the end
    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }

    // If there are remaining elements in nums2, copy them to nums1
    while (j >= 0) {
        nums1[k] = nums2[j];
        j--;
        k--;
    }
}

// Example usage:
let nums1_1 = [1, 2, 3, 0, 0, 0];
let m_1 = 3;
let nums2_1 = [2, 5, 6];
let n_1 = 3;

merge(nums1_1, m_1, nums2_1, n_1);
console.log(nums1_1); // Output: [1, 2, 2, 3, 5, 6]

let nums1_2 = [1];
let m_2 = 1;
let nums2_2 = [];
let n_2 = 0;

merge(nums1_2, m_2, nums2_2, n_2);
console.log(nums1_2); // Output: [1]

let nums1_3 = [0];
let m_3 = 0;
let nums2_3 = [1];
let n_3 = 1;

merge(nums1_3, m_3, nums2_3, n_3);
console.log(nums1_3); // Output: [1]
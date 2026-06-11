
let age: number = 50;
let name: string = 'Max';
let toggle: boolean = true;
let empty: null = null;
let notInitialize: undefined = undefined;

let callback: (a: number) => number = (a) => {
  return 100 + a;
};


let anything: any = -20;
anything = 'Text';
anything = {};


let some: unknown;
some = 'Text';

let str: string;

if (typeof some === 'string') {
  str = some;
}


const person: readonly [string, number] = ['Max', 21];


enum LoadStatus {
  LOADING,
  READY,
}

let pageStatus: LoadStatus = LoadStatus.LOADING;


let value: string | number;

value = 'Hello';
value = 100;


let state: 'enable' | 'disable';

state = 'enable';
state = 'disable';



function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error('Error');
}


type Page = {
  title: string;
  likes: number;
  accounts: string[];
  status: 'open' | 'close';
  details?: {
    createAt: Date;
    updateAt: Date;
  };
};

const page1: Page = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: new Date('2021-01-01'),
    updateAt: new Date('2021-05-01'),
  },
};

const page2: Page = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
};

console.log(page1);
console.log(page2);
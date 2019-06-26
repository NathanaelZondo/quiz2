import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the QuestionsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class QuestionsProvider {
  array1: Array<Model> = [
    {name:"What is the name of the first book in the bible?",
    options: [
      {option: "Genesis" },
      {option: "Exodus"},
      {option: "Numbers"}
      
    ]
  },
  {name:"Who is the liar?",
    options: [
      {option: "Michael" },
      {option: "Gabriel"},
      {option: "The devil"}
     
    ]},
    {name:"How many disciples did Christ have?",
    options: [
      {option: "11" },
      {option: "12"},
      {option: "10"}
     
    ]},
    {name:"Who built the ark before the world was flooded?",
    options: [
      {option: "David" },
      {option: "Noah"},
      {option: "Aaron"}
     
    ]},
    {name:"Who was John the baptis in the spirit?",
    options: [
      {option: "Elisha" },
      {option: "Eli"},
      {option: "Elijah"}
     
    ]}
]; 
array2: Array<Model> = [
  {name:"Who is the current US president?",
  options: [
    {option: "Donald Trump" },
    {option: "Barrack Obama"},
    {option: "George Bush"}
    
  ]
},
{name:"Who is the current SA president?",
  options: [
    {option: "Jacob Zuma" },
    {option: "DJ Khaled"},
    {option: "Cyril Ramaphosa"}
   
  ]},
  {name:"Who was the fisrt black president in SA?",
  options: [
    {option: "Thabo Mbeki" },
    {option: "Nelson Mandela"},
    {option: "Desmond Tutu"}
   
  ]},
  {name:"Which president was assassinated in the US?",
  options: [
    {option: "Barrack Obama" },
    {option: "JFK"},
    {option: "Donald Trump"}
   
  ]},
  {name:"Which SA president was elected after Nelson Mandela?",
  options: [
    {option: "Kgalema Motlante" },
    {option: "Jacob Zuma"},
    {option: "Thabo Mbekhi"}
   
  ]}

]; 

array3: Array<Model> = [
  {name:"Where in the body does most digestion take place?",
  options: [
    {option: "Small Intestine" },
    {option: "Shinbone"},
    {option: "Femur"}
    
  ]
},
{name:"What is the longest bone in the human body?",
  options: [
    {option: "Clavicle" },
    {option: "Gabriel"},
    {option: "The devil"}
   
  ]},
  {name:"How many teeth does a normal adult have?",
  options: [
    {option: "11" },
    {option: "16"},
    {option: "10"}
   
  ]},
  {name:"What connects your muscles to your bones?",
  options: [
    {option: "Ligaments" },
    {option: "Tendons"},
    {option: "Hair"}
   
  ]},
  {name:"What is the heaviest organ in the human body?",
  options: [
    {option: "Liver" },
    {option: "Heart"},
    {option: "Skin"}
   
  ]}

]; 


array4: Array<Model> = [
  {name:"What kind of bird has a huge yellow bill?",
  options: [
    {option: "Toucan" },
    {option: "Heron"},
    {option: "Puffin"}
    
  ]
},
{name:"Which of these body parts do birds not have?",
  options: [
    {option: "Brains" },
    {option: "Toes"},
    {option: "Teeth"}
   
  ]},
  {name:"What is the largest breed of penguin?",
  options: [
    {option: "King" },
    {option: "Emperor"},
    {option: "Jack"}
   
  ]},
  {name:"Which bird lays the largest eggs?",
  options: [
    {option: "Vulture" },
    {option: "Ostrich"},
    {option: "Eagle"}
   
  ]},
  {name:"What is the only type of bird that can fly backwards?",
  options: [
    {option: "Seagull" },
    {option: "Chicken"},
    {option: "Hummingbird"}
   
  ]}

]; 

array5: Array<Model> = [
  {name:"In which city was the first railway built?",
  options: [
    {option: "London" },
    {option: "Rome"},
    {option: "Paris"}
    
  ]
},
{name:"Which power is used in modern railways?",
  options: [
    {option: "Coal" },
    {option: "Steam"},
    {option: "Electricity"}
   
  ]},
  {name:"What was the fastest form of transportation before trains?",
  options: [
    {option: "Cars" },
    {option: "Horse-drawn coaches"},
    {option: "Airplanes"}
   
  ]},
  {name:"Which is the fastest steam train ever?",
  options: [
    {option: "Deltic" },
    {option: "Tahoe"},
    {option: "English Locomotive"}
   
  ]},
  {name:"Which trains are used to climb steep hills and mountains?",
  options: [
    {option: "Electric Trains" },
    {option: "Freight Trains"},
    {option: "Cog-and-rack Train"}
   
  ]}

]; 


  constructor(public http: HttpClient) {
    
  }
val =0;
pos = 0;
option()
{
 return [{opt:"Bible",pic:"https://images.pexels.com/photos/268424/pexels-photo-268424.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"},{opt:"Presidents",pic:"https://images.pexels.com/photos/532820/pexels-photo-532820.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"},{opt:"Human Body",pic:"https://images.pexels.com/photos/46510/skull-color-teeth-46510.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"},{opt:"Birds",pic:"https://images.pexels.com/photos/209084/pexels-photo-209084.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"},{opt:"Trains",pic:"https://images.pexels.com/photos/1963212/pexels-photo-1963212.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"}];
}

  list()
  {
    if(this.pos ==0)
    {
  return [{name:"What is the name of the first book in the bible?",answer:"Genesis",answer2:"Exodus",answer3:"Numbers"},
          {name:"Who is the liar?" ,answer:"Michael",answer2:"Gabriel",answer3:"Devil"},
          {name:"How many disciples did Christ have?", answer:"11",answer2:"12",answer3:"10"},
          {name:"Who built the ark before the world was flooded?", answer:"David",answer2:"Noah",answer3:"Aaron"},
          {name:"Who was John the baptis in the spirit?", answer:"Elisha",answer2:"Eli",answer3:"Elijah"}
  ]; 
}
else if(this.pos ==1)
{
return [{name:"Who is the current US president?",answer:"Donald Trump",answer2:"Barrack Obama",answer3:"George Bush"},
      {name:"Who is the current SA president?" ,answer:"Jacob Zuma",answer2:"DJ Khaled",answer3:"Cyril Ramaphosa"},
      {name:"Who was the fisrt black president in SA?", answer:"Thabo Mbeki",answer2:"Nelson Mandela",answer3:"Desmond Tutu"},
      {name:"Which president was assassinated in the US?", answer:"Barrack Obama",answer2:"JFK",answer3:"Denzel Washington"},
      {name:"Which SA president was elected after Nelson Mandela?", answer:"Kgalema Motlante",answer2:"Jacob Zuma",answer3:"Thabo Mbekhi"}
]; 
}
else if(this.pos ==2)
{
return [{name:"Where in the body does most digestion take place?",answer:"Small Intestine",answer2:"Mouth",answer3:"Liver"},
      {name:"What is the longest bone in the human body?" ,answer:"Clavicle",answer2:"Shinbone",answer3:"Femur"},
      {name:"How many teeth does a normal adult have?", answer:"16",answer2:"32",answer3:"48"},
      {name:"What connects your muscles to your bones?", answer:"Ligaments",answer2:"Tendons",answer3:"Hair"},
      {name:"What is the heaviest organ in the human body?", answer:"Liver",answer2:"Heart",answer3:"Skin"}
]; 
}
else if(this.pos ==3)
{
return [{name:"What kind of bird has a huge yellow bill?",answer:"Toucan",answer2:"Heron",answer3:"Puffin"},
      {name:"Which of these body parts do birds not have?" ,answer:"Brains",answer2:"Toes",answer3:"Teeth"},
      {name:"What is the largest breed of penguin?", answer:"King",answer2:"Emperor",answer3:"Jack"},
      {name:"Which bird lays the largest eggs?", answer:"Vulture",answer2:"Ostrich",answer3:"Eagle"},
      {name:"What is the only type of bird that can fly backwards?", answer:"Seagull",answer2:"Chicken",answer3:"Hummingbird"}
]; 
}
else if(this.pos ==4)
{
return [{name:"In which city was the first railway built?",answer:"London",answer2:"Rome",answer3:"Paris"},
      {name:"Which power is used in modern railways?" ,answer:"Coal",answer2:"Steam",answer3:"Electricity"},
      {name:"What was the fastest form of transportation before trains?", answer:"Cars",answer2:"Horse-drawn stagecoaches",answer3:"Airplanes"},
      {name:"Which is the fastest steam train ever?", answer:"Deltic",answer2:"Tahoe",answer3:"English Locomotive"},
      {name:"Which trains are used to climb steep hills and mountains?", answer:"Electric Trains",answer2:"Freight Trains",answer3:"Cog-and-rack Train"}
]; 
}





  }

}
interface Model {
  name: string
  options: [
    {option: string;},
    {option: string;},
    {option: string;}
  ]
}
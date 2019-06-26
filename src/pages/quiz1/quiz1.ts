import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Thumbnail } from 'ionic-angular';
import { QuestionsProvider } from '../../providers/questions/questions';

/**
 * Generated class for the Quiz1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quiz1',
  templateUrl: 'quiz1.html',
})
export class Quiz1Page {
gob =[];
gob2 = [];
sho:any = {};
val1;
message;
message2;
wrong ;
  constructor(public navCtrl: NavController, public navParams: NavParams,public q1:QuestionsProvider) {
    
    if(this.q1.pos==0)
    {
    this.gob = this.q1.array1;
     this.gob2 = this.q1.array1;
    console.log(this.gob) 
    }
    else if(this.q1.pos ==1)
    {
     this.gob =this.q1.array2; 
    }
    else if(this.q1.pos ==2)
    {
     this.gob =this.q1.array3; 
    }
    else if(this.q1.pos ==3)
    {
     this.gob =this.q1.array4; 
    }
    else if(this.q1.pos ==4)
    {
     this.gob =this.q1.array5; 
    }
  }

  ionViewDidLoad() {
  
  }


  v1(value)
  {
  if(value == "Genesis")
  {
    this.q1.val +=1;
    
  }
  else if(value == "Exodus")
  {
    this.q1.val +=0;

  }
  else if(value == "Numbers")
  {
    this.q1.val +=0;
    
  }
  else if(value == "The devil")
  {
    this.q1.val +=1;
    
  }
  else if(value == "Michael")
  {
    this.q1.val +=0;

  }
  else if(value == "Gabriel")
  {
    this.q1.val +=0;
    
  }
  else if(value == "12")
  {
    this.q1.val +=1;
    
  }
  else if(value == "11")
  {
    this.q1.val +=0;

  }
  else if(value == "10")
  {
    this.q1.val +=0;
    
  }
  else if(value == "Noah")
  {
    this.q1.val +=1;
    
  }
  else if(value == "Aaron")
  {
    this.q1.val +=0;

  }
  else if(value == "David")
  {
    this.q1.val +=0;
    
  }
  else if(value == "Elijah")
  {
    this.q1.val +=1;
    
  }
  else if(value == "Eli")
  {
    this.q1.val +=0;

  }
  else if(value == "Elisha")
  {
    this.q1.val +=0;
    
  }
  else if(value == "Donald Trump")
  {
    this.q1.val +=1;
    
  }
  else if(value == "Barrack Obama")
  {
    this.q1.val +=0;

  }
  else if(value == "George Bush")
  {
    this.q1.val +=0;
    
  }
  else if(value == "Nelson Mandela")
  {
    this.q1.val +=1;
    
  }
  else if(value == "Desmond Tutu")
  {
    this.q1.val +=0;

  }
  else if(value == "Thabo Mbeki")
  {
    this.q1.val +=0;
    
  }
  else if(value == "Thabo Mbekhi")
  {
    this.q1.val +=1;
    
  }
  else if(value == "Mazwi")
  {
    this.q1.val +=0;

  }
  else if(value == "Robert Mugabe")
  {
    this.q1.val +=0;
    
  }
  else if(value == "Toucan")
  {
    this.q1.val +=1;
    
  }
  else if(value == "Puffin")
  {
    this.q1.val +=0;

  }
  else if(value == "Heron")
  {
    this.q1.val +=0;
    
  }
  else if(value == "Teeth")
  {
    this.q1.val +=1;
    
  }
  else if(value == "Brains")
  {
    this.q1.val +=0;

  }
  else if(value == "Toes")
  {
    this.q1.val +=0;
    
  }
  else if(value == "Emperor")
  {
    this.q1.val +=1;
    
  }
  else if(value == "Jack")
  {
    this.q1.val +=0;

  }
  else if(value == "King")
  {
    this.q1.val +=0;
    
  }
  else if(value == "Ostrich")
  {
    this.q1.val +=1;
    
  }
  else if(value == "Vulture")
  {
    this.q1.val +=0;

  }
  else if(value == "Eagle")
  {
    this.q1.val +=0;
    
  }
  else if(value == "HummingBird")
  {
    this.q1.val +=1;
    
  }
  else if(value == "Chicken")
  {
    this.q1.val +=0;

  }
  else if(value == "Seagull")
  {
    this.q1.val +=0;
    
  }
  else if(value == "London")
  {
    this.q1.val +=1;
    
  }
  else if(value == "Rome")
  {
    this.q1.val +=0;

  }
  else if(value == "Paris")
  {
    this.q1.val +=0;
    
  }
  else if(value == "Electricity")
  {
    this.q1.val +=1;
    
  }
  else if(value == "Coal")
  {
    this.q1.val +=0;

  }
  else if(value == "Steam")
  {
    this.q1.val +=0;
    
  }
  else if(value == "Horse-drawn Coaches")
  {
    this.q1.val +=1;
    
  }
  else if(value == "Cars")
  {
    this.q1.val +=0;

  }
  else if(value == "Airplanes")
  {
    this.q1.val +=0;
    
  }
  else if(value == "Tahoe")
  {
    this.q1.val +=1;
    
  }
  else if(value == "Deltic")
  {
    this.q1.val +=0;

  }
  else if(value == "English Locomotive")
  {
    this.q1.val +=0;
    
  }
  else if(value == "Cog-and-rack Train")
  {
    this.q1.val +=1;
    
  }
  else if(value == "Electric Trains")
  {
    this.q1.val +=0;

  }
  else if(value == "Frieght Trains")
  {
    this.q1.val +=0;
    
  }

}
  
  



save1()
{
 this.val1 =this.q1.val/5*100;
 this.message = "You got :" ;
this.message2 = "%";
this.wrong;
}



  }


  




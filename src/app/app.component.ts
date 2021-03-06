import { Component, OnInit } from '@angular/core';
// WZ - it is necessary to import jss heree
import jss, { StyleSheet } from 'jss';
import {red, green, blue} from './app.component.styles';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent{
  public mySheet: StyleSheet;
  public title = 'angular-jss';

  constructor(){
    this.mySheet = jss.createStyleSheet({
      title: {
        textAlign: 'center',
        backgroundColor: '#E0E0E0',
        '&:hover': {
            backgroundColor: '#BDBDBD'
        }
      },
      area: {
          width: '100%',
          height: '10rem',
          color: 'white',
          backgroundColor: (data: any) => data.area.backgroundColor
      }
    }, {link: true}).attach();
  }

  public changeColor(color: string): void{
    console.log("Chamou");
    var finalColor: string;

    switch(color){
      case 'red':
        finalColor = red;
        break;
      case 'blue':
        finalColor = blue;
        break;
      default:
        finalColor = green;
        break;
    }

    this.mySheet.update({
      area: {backgroundColor: finalColor}
    });
  }
}
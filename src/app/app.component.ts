import { Component, ViewChild, Inject } from '@angular/core';
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons';

// WZ - it is necessary to import jss heree
import jss, { StyleSheet } from 'jss';
import {red, green, blue} from './app.component.styles';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent{
  @ViewChild('toggleBtn')
  public toggleBtn: ButtonComponent;

  public mySheet: StyleSheet;
  public title = 'angular-jss';

  constructor(@Inject('sourceFiles') private sourceFiles: any){
    sourceFiles.files = ['button.css'];

    // CSS IN JS
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

    this.mySheet.update({
      area: {backgroundColor: red}
    });
  }
}

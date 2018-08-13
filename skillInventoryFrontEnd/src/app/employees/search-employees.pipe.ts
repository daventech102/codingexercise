import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchEmployees'
})
export class SearchEmployeesPipe implements PipeTransform {

  transform(pipeData, pipeModifier): any {
    if (pipeData==null || pipeModifier==null ) {
      return null;
    }
    return pipeData.filter(eachItem => {
      if(eachItem['owner'] != null || eachItem['text'] == null){
      return (
       
        eachItem['owner'].toLowerCase().includes(pipeModifier.toLowerCase()) ||
        eachItem['text'].toLowerCase().includes(pipeModifier.toLowerCase())
      
      )
    }
    });
  }
}

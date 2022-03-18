import { Pipe, PipeTransform } from '@angular/core';
import { prize } from 'src/app/model/prize';

@Pipe({
  name: 'yearcategoryfilter'
})
export class YearcategoryfilterPipe implements PipeTransform {

  transform(flist: prize[], selectedyear:string, selectedcategory :string): any {
    if (selectedyear =='All' && selectedcategory =='All')
    {
      return flist;
    }
    else
    { 
      if (selectedyear == 'All' && selectedcategory != 'All')
      {
         return flist.filter((x:prize)=>x.category===selectedcategory)
      }
      else if (selectedyear != 'All' && selectedcategory == 'All')
      {
        return flist.filter((x:prize)=>x.year===selectedyear)
      }
      else
      {
        return flist.filter((x:prize)=>x.year===selectedyear && x.category === selectedcategory)
      }
    }
    
  }

}


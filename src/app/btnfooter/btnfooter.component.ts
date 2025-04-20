import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-btnfooter',
  imports: [],
  templateUrl: './btnfooter.component.html',
  styleUrl: './btnfooter.component.css'
})
export class BtnfooterComponent implements OnInit {
  btnsResponse:any[] = [];
  apiService = inject(ApiService);

  ngOnInit(): void {
    this.getButtons();
  }


  getButtons() {
    this.apiService.getButtons().subscribe(
      {
        next: (v: any) => {
          if (v.status && v.status.toLowerCase() === 'success') {
            this.transformButtonsResp(v.responseData)
          }
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      }
    )
  }

  transformButtonsResp(data: any[]) {
   
    data.forEach(el => {
      if (el.attribute) {
        try {
          el.attribute = JSON.parse(el.attribute)
        } catch (e) {
          console.log('error while parsing attribute');

        }
      }
    })
    console.log(data);
    this.btnsResponse = [...data]
  }
}

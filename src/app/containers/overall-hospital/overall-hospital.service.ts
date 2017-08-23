import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

const data = [
  {
    name: 'PACU',
    value: 234,
    color: '#89bac5',
    selected: true,
    byCmg: [
      {
        name: 'A',
        value: 123,
        color: '#69a6b6',
        byUnit: [
          {
            name: 'A1',
            value: 97,
            color: '#69a6b6'
          },
          {
            name: 'A2',
            value: 17,
            color: '#69a6b6'
          },
          {
            name: 'A3',
            value: 9,
            color: '#69a6b6'
          }
        ]
      },
      {
        name: 'B',
        value: 40,
        color: '#d7e8ed',
        byUnit: [
          {
            name: 'B1',
            value: 17,
            color: '#d7e8ed'
          },
          {
            name: 'B2',
            value: 17,
            color: '#d7e8ed'
          },
          {
            name: 'B3',
            value: 6,
            color: '#d7e8ed'
          }
        ]
      },
      {
        name: 'C',
        value: 71,
        color: '#408192',
        byUnit: [
          {
            name: 'C1',
            value: 45,
            color: '#408192'
          },
          {
            name: 'C2',
            value: 16,
            color: '#408192'
          },
          {
            name: 'C3',
            value: 10,
            color: '#408192'
          }
        ]
      }
    ]
  },
  {
    name: 'ED',
    value: 310,
    color: '#81ce7c',
    byCmg: [
      {
        name: 'L',
        value: 210,
        color: '#57b150',
        byUnit: [
          {
            name: 'L1',
            value: 109,
            color: '#57b150'
          },
          {
            name: 'L2',
            value: 11,
            color: '#57b150'
          },
          {
            name: 'L3',
            value: 90,
            color: '#57b150'
          }
        ]
      },
      {
        name: 'M',
        value: 30,
        color: '#399332',
        byUnit: [
          {
            name: 'M1',
            value: 9,
            color: '#399332'
          },
          {
            name: 'M2',
            value: 12,
            color: '#399332'
          },
          {
            name: 'M3',
            value: 9,
            color: '#399332'
          }
        ]
      },
      {
        name: 'N',
        value: 70,
        color: '#aef3a9',
        byUnit: [
          {
            name: 'N1',
            value: 38,
            color: '#aef3a9'
          },
          {
            name: 'N2',
            value: 19,
            color: '#aef3a9'
          },
          {
            name: 'N3',
            value: 13,
            color: '#aef3a9'
          }
        ]
      }
    ]
  },
  {
    name: 'OB',
    value: 129,
    color: '#f09172',
    byCmg: [
      {
        name: 'W',
        value: 56,
        color: '#d26e50',
        byUnit: [
          {
            name: 'W1',
            value: 12,
            color: '#d26e50'
          },
          {
            name: 'W2',
            value: 18,
            color: '#d26e50'
          },
          {
            name: 'W3',
            value: 26,
            color: '#d26e50'
          }
        ]
      },
      {
        name: 'X',
        value: 42,
        color: '#b05235',
        byUnit: [
          {
            name: 'X1',
            value: 11,
            color: '#b05235'
          },
          {
            name: 'X2',
            value: 6,
            color: '#b05235'
          },
          {
            name: 'X3',
            value: 25,
            color: '#b05235'
          }
        ]
      },
      {
        name: 'Y',
        value: 31,
        color: '#ecb3a2',
        byUnit: [
          {
            name: 'Y1',
            value: 1,
            color: '#ecb3a2'
          },
          {
            name: 'Y2',
            value: 23,
            color: '#ecb3a2'
          },
          {
            name: 'Y3',
            value: 7,
            color: '#ecb3a2'
          }
        ]
      }
    ]
  }
];

@Injectable()
export class OverallHospitalService {
  data$ = Observable.of(data);
}

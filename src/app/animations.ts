import {
  animate,
  query,
  stagger,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';

export const staggerList = trigger('staggerList', [
  transition(':enter', [
    query(
      ':enter',
      [
        style({ opacity: 0, transform: 'translateY(-15px)' }),
        stagger(
          '0.5s',
          animate(
            '550ms ease-out',
            style({ opacity: 1, transform: 'translateY(0px)' })
          )
        )
      ],
      { optional: true }
    )
  ])
]);

export const changeStatus = trigger('changeStatus', [
  state(
    'New',
    style({
      backgroundColor: 'white'
    })
  ),
  state(
    'In Progress',
    style({
      backgroundColor: '#f79f8c'
    })
  ),
  state(
    'In Review',
    style({
      backgroundColor: '#82d7fd'
    })
  ),
  state(
    'Complete',
    style({
      backgroundColor: '#8efd82'
    })
  ),
  transition('* <=> *', [animate('1s')])
]);

export const changeSize = trigger('changeSize', [
  transition(
    '* <=> *',
    animate('200ms', style({ 'font-size': '{{inFontSize}}px' })),
    { params: { inFontSize: 50 } }
  )
]);

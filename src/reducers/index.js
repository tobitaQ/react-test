//
// action = {
//   type: 'CREATE_EVNET'
//   title:
//   boty:   
// }
//
// state = [];
//
// state = [
//   { id:1, title: 'title1', body: 'body1'}, 
//   { id:2, title: 'title2', body: 'body2'}, 
//   { id:3, title: 'title3', body: 'body3'}, 
// ]

const events = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_EVENT':
      const event = {title: action.title, body: action.body };
      const length = state.length;
      let id = length === 0? 1: state[length-1].id + 1;
      return [...state, { id, ...event}];
    case 'DELETEE_EVENT':  
      return state;    
    case 'DELETEE_ALL_EVENT':
      // return [];
    default:
      return state;
  };
};

export default events()
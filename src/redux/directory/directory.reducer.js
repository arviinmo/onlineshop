const INITIAL_STATE = {
  sections: [
    {
      title: 'hats',
      imageUrl: 'https://images.unsplash.com/photo-1487338824319-64ff9302d403?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OTh8fGJ1bGIlMjBsaWdodHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      id: 1,
      linkUrl: 'shop/hats'
    },
    {
      title: 'jackets',
      imageUrl: 'https://media.gettyimages.com/photos/big-spool-of-optic-wire-picture-id172859332?s=2048x2048',
      id: 2,
      linkUrl: 'shop/jackets'
    },
    {
      title: 'sneakers',
      imageUrl: 'https://images.unsplash.com/photo-1613250244443-8688142898d5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTd8fGNoYW5kZWxpZXJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      id: 3,
      linkUrl: 'shop/sneakers'
    },
    {
      title: 'womens',
      imageUrl: 'https://images.unsplash.com/photo-1556217994-22de7face210?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c3dpdGNofGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      size: 'large',
      id: 4,
      linkUrl: 'shop/womens'
    },
    {
      title: 'mens',
      imageUrl: 'https://images.unsplash.com/photo-1508920291026-c344bbfca1ab?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8c29ja2V0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      size: 'large',
      id: 5,
      linkUrl: 'shop/mens'
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
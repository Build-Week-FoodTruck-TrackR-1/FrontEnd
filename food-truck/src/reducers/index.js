import { ADD_OPERATOR_SUCCESS, ADD_OPERATOR_START, ADD_OPERATOR_FAIL, ADD_DINER_START, ADD_DINER_SUCCESS ,
     ADD_DINER_FAIL, DINER_LOGIN_START , DINER_LOGIN_SUCCESS, OPERATOR_LOGIN_START, OPERATOR_LOGIN_SUCCESS, OPERATOR_LOGIN_FAIL , DINER_LOGIN_FAIL, REMEMBER_STATE_ON_REFRESH
    , EDIT_MENU_ITEM_START, EDIT_MENU_ITEM_SUCCESS, EDIT_MENU_ITEM_FAIL, EDIT_TRUCK_START, EDIT_TRUCK_SUCCESS, EDIT_TRUCK_FAIL, ADD_MENU_ITEM, DELETE_TRUCK_START, DELETE_TRUCK_SUCCESS, DELETE_TRUCK_FAIL, SIGN_OUT, 
    ADD_REVIEW, CHANGE_FAVORITE, EDIT_DINER_INFORMATION_START, EDIT_DINER_INFORMATION_SUCCESS, EDIT_DINER_INFORMATION_FAIL } from "../actions";
   // import uuid from 'react-uuid';
    
    
    const initialState = {
        currentUser: {},
        trucks: [],
        isDeleting: false,
        isUpdating: false,
        isAdding: false,
        err: null
    
    };
    
    
    function reducer (state = initialState, action) {
    
        console.log("here");
    
        switch(action.type) {
    
            //  case EDIT_DINER_INFORMATION:
    
            //     console.log('sup')
            //     console.log(action.payload);
    
            //     localStorage.setItem('state', JSON.stringify({...state,
            //         currentUser: {...state.currentUser,
            //                      firstName: action.payload.firstName,
            //                      lastName: action.payload.lastName,
            //                      email: action.payload.email,
            //                      location: action.payload.location}}));
                
            //     return({...state,
            //             currentUser: {...state.currentUser,
            //                          firstName: action.payload.firstName,
            //                          lastName: action.payload.lastName,
            //                          email: action.payload.email,
            //                          location: action.payload.location}});
    
            // case EDIT_OPERATOR_INFORMATION:
    
            //     localStorage.setItem('state', JSON.stringify({...state,
            //         currentUser: {...state.currentUser,
            //                      firstName: action.payload.firstName,
            //                      lastName: action.payload.lastName,
            //                      email: action.payload.email,
            //                      businessName: action.payload.businessName}}));
                
            //     return({...state,
            //             currentUser: {...state.currentUser,
            //                          firstName: action.payload.firstName,
            //                          lastName: action.payload.lastName,
            //                          email: action.payload.email,
            //                          businessName: action.payload.businessName}});
    
    
            // case EDIT_MENU_ITEM:
    
            //     const truckIndex = state.currentUser.trucks.findIndex(truck => {
            //         return truck.id === action.payload.currentTruck
            //     });
    
            //     let trucks = state.currentUser.trucks;
            //     if ([action.payload.catagory] === [action.payload.currentCatagory]){
            //             const itemIndex = trucks[truckIndex].catagorys[action.payload.catagory].findIndex( item => {
            //                 return item.id === action.payload.id
            //         });
                    
            //             let updatedCatagory = trucks[truckIndex].catagorys[action.payload.catagory]
            //             updatedCatagory[itemIndex] = {
            //                 ...updatedCatagory[itemIndex],
            //                 description: action.payload.description,
            //                 price: action.payload.price,
            //                 name: action.payload.itemName
            //             };
    
            //             trucks[truckIndex].catagorys[action.payload.catagory] = updatedCatagory;
    
            //         return{
            //             ...state,
            //             currentUser: {...state.currentUser,
            //             trucks: trucks}
            //         }
            
            //     }
            //     else {
    
            //         if (!trucks[truckIndex].catagorys.hasOwnProperty(action.payload.catagory))
            //         {
            //             trucks[truckIndex].catagorys[action.payload.catagory] = [{
            //                 name: action.payload.itemName,
            //                 description: action.payload.description,
            //                 price: action.payload.price,

            //             }]
    
            //             console.log(trucks);
    
            //             return{
            //                 ...state,
            //                 currentUser:{...state.currentUser,
            //                 trucks: trucks}
            //             };
            //         }
            //         else {
                        
            //             const filteredCatagory = trucks[truckIndex].catagorys[action.payload.currentCatagory].filter( item => {
            //                 return item.id !== action.payload.id
            //             });
    
    
            //             trucks[truckIndex].catagorys[action.payload.currentCatagory] = filteredCatagory;
            //             trucks[truckIndex].catagorys[action.payload.catagory] = 
            //             [...trucks[truckIndex].catagorys[action.payload.catagory],
            //             { name: action.payload.itemName,
            //                 description: action.payload.description,
            //                 price: action.payload.price,
                            
            //             }];
    
    
            //             return {...state,
            //             currentUser: {...state.currentUser,
            //             trucks: trucks}};
    
            //         }
            //     }
             
            case EDIT_TRUCK_START:
    
               return {
                   ...state,
                   isAdding: false,
               }
            case EDIT_TRUCK_SUCCESS:
                return{
                    ...state,
                    isUpdating: false,
                    trucks: [...state.trucks, action.payload]
                }   
            case EDIT_TRUCK_FAIL:
                return {
                    err: null
                }    

    
            case DELETE_TRUCK_START:
    
                return {
                    ...state,
                    isDeleting: true,
                }
            case DELETE_TRUCK_SUCCESS:
                return {
                    isDeleting: false,
                    trucks: state.trucks.filter(truck => {
                        return truck.id !== Selection.payload
                    })
                }
            case DELETE_TRUCK_FAIL: 
             return {
                 err: null
             }
                  
    
            case ADD_MENU_ITEM:
    
    
                let itemTruckList = state.currentUser.trucks 
                const itemTruckListIndex = itemTruckList.findIndex( truck => {
                    return truck.id === action.payload.id
                });
    
                console.log(action.payload.id);
    
                if(itemTruckList[itemTruckListIndex].catagorys.hasOwnProperty(action.payload.catagory)){
    
    
                    itemTruckList[itemTruckListIndex].catagorys[action.payload.catagory] = [
                        ...itemTruckList[itemTruckListIndex].catagorys[action.payload.catagory],
                        {
                            
                            name: action.payload.itemName,
                            description: action.payload.description,
                            price: action.payload.price,
                        }]
    
                    return {...state,
                    currentUser: {...state.currentUser,
                    trucks: itemTruckList}}
                }
                else {
    
                    itemTruckList[itemTruckListIndex].catagorys[action.payload.catagory] = [{
                        
                        name: action.payload.itemName,
                        description: action.payload.description,
                        price: action.payload.price,
                    }];
    
                    return {...state,
                        currentUser: {...state.currentUser,
                        trucks: itemTruckList}}
                }
    
    
            case REMEMBER_STATE_ON_REFRESH: 
            
            console.log(action.payload);
    
                return JSON.parse(localStorage.getItem('state'));
            
            case ADD_OPERATOR_START:
               return {
                   ...state
               }
            case ADD_OPERATOR_SUCCESS:
    
                console.log("here");
    
                localStorage.setItem('state', JSON.stringify({currentUser: action.payload}));
                localStorage.setItem('role', JSON.stringify(action.payload.Role));
    
                return {currentUser: action.payload}

            case ADD_OPERATOR_FAIL:
               return {
                   ...state
               }
            
               case ADD_DINER_START:
                return {
                    ...state
                }
             case ADD_DINER_SUCCESS:
     
                 console.log("here");
     
                 localStorage.setItem('state', JSON.stringify({currentUser: action.payload}));
                 localStorage.setItem('role', JSON.stringify(action.payload.Role));
     
                 return {currentUser: action.payload}
 
             case ADD_DINER_FAIL:
                return {
                    ...state
                }
    
                console.log("here");
    
                localStorage.setItem('state', JSON.stringify(action.payload));
                localStorage.setItem('role', JSON.stringify(action.payload.currentUser.Role));
    
                return action.payload;
    
            case ADD_REVIEW:
    
                const truckReviewIndex = state.trucks.findIndex( truck =>{
                    return truck.id === action.payload.truckId
                });
    
                let reviewTrucks = state.trucks;
                reviewTrucks[truckReviewIndex].reviews = [...reviewTrucks[truckReviewIndex].reviews,
                                             action.payload.review];
                      
                localStorage.setItem('state', JSON.stringify({...state, 
                                                            trucks: reviewTrucks}));
    
                return {...state,
                        trucks: reviewTrucks};
            
            case CHANGE_FAVORITE: {
    
                console.log(action.payload);
    
                if(action.payload.favorite){
    
                    console.log(action.payload);
    
                    let ls = JSON.parse(localStorage.getItem('state'));
                    ls.currentUser.favoriteTrucks = [...ls.currentUser.favoriteTrucks, action.payload.truckId]
                    localStorage.setItem('state', JSON.stringify(ls));
    
                    return {
                        ...state,
                        currentUser: {...state.currentUser,
                                    favoriteTrucks: [
                                        ...state.currentUser.favoriteTrucks,
                                        action.payload.truckId
                                    ]}
                    }
                }
                else{
                    
                   const favoriteTrucks = state.currentUser.favoriteTrucks.filter( truck => {
                        return truck !== action.payload.truckId
                   });
    
                   
                   let ls = JSON.parse(localStorage.getItem('state'));
                   ls.currentUser.favoriteTrucks = favoriteTrucks;
                   localStorage.setItem('state', JSON.stringify(ls));
    
                   return {
                    ...state,
                    currentUser: {...state.currentUser,
                                favoriteTrucks: favoriteTrucks}
                }
    
    
                }
    
            }
    
            case OPERATOR_LOGIN_START:
                return {
                    ...state
                }
             case OPERATOR_LOGIN_SUCCESS:
     
                 console.log("here");
     
                 localStorage.setItem('state', JSON.stringify({currentUser: action.payload}));
                 localStorage.setItem('role', JSON.stringify(action.payload.Role));
     
                 return {currentUser: action.payload}
 
             case OPERATOR_LOGIN_FAIL:
                return {
                    ...state
                }
    
                    case DINER_LOGIN_START:
                        return {
                            ...state
                        }
                     case DINER_LOGIN_SUCCESS:
             
                         console.log("here");
             
                         localStorage.setItem('state', JSON.stringify({currentUser: action.payload}));
                         localStorage.setItem('role', JSON.stringify(action.payload.Role));
             
                         return {currentUser: action.payload}
         
                     case DINER_LOGIN_FAIL:
                        return {
                            ...state
                        }
    
            case SIGN_OUT: 
    
            return { }
    
            default:
                
                    console.log(action.payload);
                    return state;
    
        }
    
    };
    
    export default reducer;
// import { createStore } from "https://cdn.skypack.dev/redux";

// Custom Redux
function createStore(reducer) {
    let state = reducer(undefined, {});
    let subscribers = [];

    return {
        getState() {
            return state;
        },
        dispatch(action) {
            state = reducer(state, action);
            subscribers.forEach(subscriber => subscriber())
        },
        subscribe(subscriber) {
            subscribers.push(subscriber);
        },
    }
}

/////////////// MY APP /////////////////

const initState = 0;

// Reducer
function counterReducer(state = initState, action) {
    switch (action.type) {
        case "INCREASE":
            return state += action.payload;
        case "DECREASE":
            return state -= action.payload;
        default:
            return state;
    }
}

const store = window.store = createStore(counterReducer);

function render() {
    const output = document.querySelector("#output");
    output.innerText = store.getState();
}

// Action
function increaseAction(payload) {
    return {
        type: "INCREASE",
        payload
    }
}

function decreaseAction(payload) {
    return {
        type: "DECREASE",
        payload
    }
}

// Query
const increateBtn = document.querySelector("#increase");
const decreateBtn = document.querySelector("#decrease");

increateBtn.onclick = function () {
    store.dispatch(increaseAction(1))
}

decreateBtn.onclick = function () {
    store.dispatch(decreaseAction(1))
}

render();

// Listen 
store.subscribe(function () {
    render();
})

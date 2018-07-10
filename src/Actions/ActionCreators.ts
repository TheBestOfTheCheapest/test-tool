// import {fetch} from 'cross-fetch';
import ACTION_TYPES from './ActionTypes';
import * as Models from '../Models';
// import {ThunkAction} from 'redux-thunk';
// import {Dispatch} from 'react-redux';
import {IReceiveTaskJSON} from '../Models';
import * as Redux from 'redux';
import {dispatchAsync, getTask} from '../utils';
import {IReceiveTask} from '../Models';


/**
 * Изменение решения задачи
 *
 * @param {string} value - текст решения задачи
 */
export function changeSolutionValue(value: string): Models.ISolutionAction {
    return {
        type: ACTION_TYPES.CHANGE_SOLUTION_VALUE,
        payload: value
    }
}

/**
 * Запрос на получение конкретной задачи
 * @param {string} taskId ID задачи
 * @returns {ISolutionAction}
 */
export function requestTask(taskId: string): Models.ISolutionAction {
    return {
        type: ACTION_TYPES.REQUEST_TASK,
        payload: taskId
    }
}

export function receiveTask(json: Models.IReceiveTaskJSON): Models.IReceiveTask {
    return {
        type: ACTION_TYPES.RECEIVE_TASK,
        taskId: json.taskId,
        taskTitle: json.taskTitle,
        taskText: json.taskText,
        sourceSample: json.sourceSample
    }
}

//TODO Написать action creator на ошибку получения задачи



//TODO для получения конкретной задачи делать GET на /tasks/task?id={taskId}

// export function fetchTask(taskId: string){
//     console.log('Fething task... taskId:', taskId);
//     return function (dispatch) {
//         dispatch(requestTask(taskId));
//         return fetch(`http://localhost:8080/tasks/task?id=${taskId}`)
//             .then(
//                 response => response.json(),
//                 error => console.log('An error occurred.', error)
//             )
//             .then(
//                 json => dispatch(receiveTask(json))
//             )
//     }
//
// }

export function getTaskData(taskId: number): (dispatch: Redux.Dispatch<IReceiveTask>) => Promise<IReceiveTaskJSON> {
    return dispatchAsync<number, IReceiveTaskJSON, string>(
        ACTION_TYPES.GET_TASK_DATA,
        () => getTask(taskId),
        taskId
    )
}


//TODO для получения всех задач делать GET на /tasks . Возвращает массив задач (item -- вся инфа по задаче)


//TODO для отправки решения POST на /tasks/solution . Возвращает result, который сожержит SUCCESS или StackTrace



//TODO ЕСли успею: добавление задачи, удаление задачи
import _ from 'lodash';

let ydata = [ 0, -0.8, -0.5, -0.9, 0, .5, 1.2, 1.5, 0.2, 1.4, 1.9, 2.9, 0.9, -.5, -3.9, -4.5, -0.9, 0.3, 1.4, -0.4, -2.9, -2.4, 0, 1.1, 1.5, 1.6, 1.8, 1.4, 1.5 ];

let data = {
    ydata: ydata,
    xdata: _.range(0, 600, 600/ydata.length)
}

export default data;
export const reviewBudget = (budget, remaining) => {
    let classAux;

    if ((budget / 4) > remaining) {
        classAux = 'alert alert-danger';
    }
    else if ((budget / 2) > remaining) {
        classAux = 'alert alert-warning';
    }else{
        classAux = 'alert alert-success'
    }
    return classAux;
}
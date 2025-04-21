const useTimer = (difficulty) => {
    if (difficulty === "easy" || difficulty === "") {
        return 30;
    }
    if (difficulty === "medium") {
        return 20;
    } 
    if (difficulty === "hard") {
        return 10;
    }
    return 30;
}
export default useTimer;
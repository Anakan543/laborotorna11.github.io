const wordsWithTranslations = [
{ english: "apple", ukraine: "яблоко" },
{ english: "book", ukraine: "книга" },
{ english: "cat", ukraine: "кішка" },
{ english: "dog", ukraine: "собака" },
{ english: "melancholy", ukraine: "меланхолія" },
{ english: "moon", ukraine: "луна" },
{ english: "laptop", ukraine: "ноутбук" },
{ english: "luck", ukraine: "вдача" },
{ english: "courage", ukraine: "сміливість" },
{ english: "adventure", ukraine: "пригода" }
];

    let numbers1 = 0;
    let iter = 0;
    let iteracia = 0;
    let win = 0;
    let loss = -1;
    const trymas = [];

    for(let i = 0; i < wordsWithTranslations.length; i++){
      let newNumber = 0;
      do {
        newNumber =  Math.floor(Math.random()*10);
      } while (trymas.includes(newNumber))
      trymas.push(newNumber);
    }
    function swapLeft() {
      console.log("iteracia " + iteracia);
      if(iteracia > 0){
      iteracia--;
      $("#textQuestion").text(wordsWithTranslations[trymas[iteracia]].english);
      $("#checkedNumber").text(iteracia+1);
    }
    }
    function swapRight(){
      console.log("iteracia " + iteracia);
      if(iteracia < 10){
        iteracia++;
        $("#textQuestion").text(wordsWithTranslations[trymas[iteracia]].english);
        $("#checkedNumber").text(iteracia+1);
    }
  }

    $("#button").on('click', function checked() {
        iteracia++;
        if(iteracia == 11){
          $("#button").off('click',  checked);
          $("#arrowRight").on('click', swapRight);
          $("#arrowLeft").on('click', swapLeft);
        }
      let text = $("#text").val().toLowerCase().trim();
      console.log(text);
        if(text === wordsWithTranslations[numbers1].ukraine){
        win++;
        $("#win").text(win);
        $("#text").val('');
      } else {
        loss++;
        $("#loss").text(loss);
        $("#text").val('');
      }
        console.log(trymas);
        numbers1 = trymas[iter];
        iter++;
        console.log(numbers1);
        console.log("iteracia " + iteracia);
        $("#textQuestion").text(wordsWithTranslations[numbers1].english);
        $("#checkedNumber").text(iteracia);
    })

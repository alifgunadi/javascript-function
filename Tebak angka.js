alert(`Selamat datang di game tebak angka
kamu diminta untuk menebak angka 1 - 3
dan kamu akan bermain dalam 5 ronde.
Player yang berhasil mengumpulkan tebakan terbanyak akan menang
SELAMAT BERMAIN!!`);

/* ---------------------------Ronde Pertama------------------------------- */ 
let score1 = 0;
let score2 = 0;


for(let i = 0; i < 5; i++) {
    let nilai = Math.round(Math.random() * 3);
    console.log(nilai);
    let Player1 = prompt(`Player 1: masukkan angka`);
    if(Player1 < nilai) {
        alert(`Tebakan anda salah`);
    }
    else if(Player1 > nilai) {
        alert(`Tebakan anda salah`);
    }
    else if(Player1 = nilai) {
        score1 = score1 + 1
        alert(`Tebakan anda benar`);
    }
    else{
        alert(`Maaf anda kalah`);
    }
    
    
    
    let Player2 = prompt(`Player 2: masukkan angka`);
    if(Player2 < nilai) {
        alert(`Tebakan anda salah`);
    }
    else if(Player2 > nilai) {
        alert(`Tebakan anda salah`);
    }
    else if(Player2 = nilai) {
        score2 = score2 + 1
        alert(`Tebakan anda benar`);
    }
    else{
        alert(`Maaf anda kalah`);
    }

    let nextRound = confirm(`Next Round?`)
    if(!nextRound) {
        break; 
    }
}

alert("Player 1 = " +score1 + "\n" + "Player 2 = " +score2);




// let nilai = Math.round(Math.random() * 5 + 5);
// alert(nilai);


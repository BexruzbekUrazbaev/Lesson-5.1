let weekend = +prompt("1 dan 7 gacha bo'lgan son yozing");
let day;

switch (weekend) {
    case 0:
        day = "Unday kun mavjud emas"
        break;
    case 1:
        day = "Yakshanba"
        break;
    case 2:
        day = "Dushanba"
        break;
    case 3:
        day = "Seshanba"
        break;
    case 4:
        day = "Chorshanba"
        break;
    case 5:
        day = "Payshanba"
        break;
    case 6:
        day = "Juma"
        break;
    case 7:
        day = "Shanba"
        break;

    default:
        day = "Haftada 7 kun mavjud"
        break;
}

alert(day)
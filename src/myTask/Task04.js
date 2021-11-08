for (var sayi = 2; sayi < 1000; sayi++) {
    for (var bolum = 2; bolum < sayi; bolum++) {
        if (sayi % bolum === 0)
            break;
    }
    if (sayi === bolum)
        console.log(sayi);

}
def increment_game():
    score = 0

    while True:
        print(f"Aktuell score: {score}")
        choice = input("Vil du inkrementere scoren? (ja/nei): ").lower()

        if choice == "ja":
            score += 1
        elif choice == "nei":
            print(f"Sluttspill. Endelig score: {score}")
            break
        else:
            print("Ugyldig inntasting. Vennligst skriv 'ja' eller 'nei'.")

# Start spillet
increment_game()
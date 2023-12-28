import random

class Card:
    def __init__(self, value, suit):
        self.value = value
        self.suit = suit

class Deck:
    def __init__(self, num_decks=2):
        self.cards = []
        self.num_decks = num_decks
        self.joker_count = 4 * num_decks

    def generate_deck(self):
        values = list(range(2, 15))  # 2 to Ace
        suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades']

        for _ in range(self.num_decks):
            for value in values:
                for suit in suits:
                    self.cards.append(Card(value, suit))

            for _ in range(self.joker_count):
                self.cards.append(Card(14, 'Joker'))

    def shuffle_deck(self):
        random.shuffle(self.cards)

    def deal_cards(self, num_players, cards_per_hand):
        hands = [[] for _ in range(num_players)]

        for _ in range(cards_per_hand):
            for i in range(num_players):
                if self.cards:
                    hands[i].append(self.cards.pop(0))

        return hands

def display_hand(hand):
    for card in hand:
        print(f"{card.value} of {card.suit}")

def main():
    num_players = int(input("Enter the number of players (3-5): "))
    while num_players < 3 or num_players > 5:
        print("Invalid number of players. Please enter a number between 3 and 5.")
        num_players = int(input("Enter the number of players (3-5): "))

    deck = Deck()
    deck.generate_deck()
    deck.shuffle_deck()

    rounds = [
        "2 Tress",
        "1 Tress and 1 Serie",
        "2 Serier",
        "3 Tress",
        "2 Tress and 1 Serie",
        "2 Serier and 1 Tress",
        "3 Serier"
    ]

    total_scores = [0] * num_players

    for round_num, round_type in enumerate(rounds, start=1):
        print(f"\nRound {round_num}: {round_type}")

        # Deal cards
        if round_num == 7:
            cards_per_hand = 12
        else:
            cards_per_hand = 10 + round_num

        hands = deck.deal_cards(num_players, cards_per_hand)

        # Display hands (for testing purposes)
        for i, hand in enumerate(hands, start=1):
            print(f"\nPlayer {i}'s hand:")
            display_hand(hand)

        # Implement the game logic for each round here
        # ...

    print("\nFinal Scores:")
    for i in range(num_players):
        print(f"Player {i + 1}: {total_scores[i]} points")

    winner = total_scores.index(min(total_scores)) + 1
    print(f"\nPlayer {winner} wins!")

if __name__ == "__main__":
    main()

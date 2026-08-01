class MusicPlayer {

    public playSong(): void {
        console.log("Playing your favorite song ");
    }
}

const player = new MusicPlayer();

player.playSong();      //  Accessible


class SmartDoor {

    private unlockDoor(): void {
        console.log("Door Unlocked ");
    }

    public enterHouse(): void {
        this.unlockDoor();
    }
}

const door = new SmartDoor();

door.enterHouse();      // yes

// door.unlockDoor();    Error

class GameConsole {

    protected loadGame(): void {
        console.log("Game Loaded ");
    }
}

class Gamer extends GameConsole {

    public startPlaying(): void {
        this.loadGame();
    }
}

const gamer = new Gamer();

gamer.startPlaying();    // yes

// gamer.loadGame();      Error
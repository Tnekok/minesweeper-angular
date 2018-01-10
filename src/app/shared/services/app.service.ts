import { Injectable } from '@angular/core';

import { Mine } from '../models/mine';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AppService {

    public isGamestatusChanged: Subject<{ isWon: boolean, isLost: boolean }> = new Subject<{ isWon: boolean, isLost: boolean }>();
    public space: Mine[][];
    public width: number;
    public height: number;
    public lost: boolean;
    public won: boolean;

    public revealedCount: number;
    public minesCount: number;

    constructor() {
        const dimension = 10;
        this.restart(dimension, dimension);
    }

    restart(width: number, height: number): void {
        this.width = width;
        this.height = height;
        this.space = [];
        const percentageOfMines = 0.15;
        this.minesCount = Math.floor(this.width * this.height * percentageOfMines);
        this.revealedCount = 0;
        this.lost = false;
        this.won = false;
        this.generateMineBoxes();
        this.generateMines();
        this.generateDanger();
        this.emitStatus({ isWon: this.won, isLost: this.lost });
    }

    reveal(i: number, j: number): void {
        if (!this.lost && !this.won) {
            if (this.space[i][j].getMine()) {
                this.space[i][j].setRevealed(true);
                this.lost = true;
                this.emitStatus({ isWon: false, isLost: true });
                return;
            }
            this.expand(i, j);
            if (this.revealedCount === this.width * this.height - this.minesCount) {
                this.won = true;
                this.emitStatus({ isWon: true, isLost: false });
            }
        }
    }

    emitStatus(status) {
        this.isGamestatusChanged.next(status);
    }

    private generateMineBoxes(): void {
        for (let i = 0; i < this.width; i++) {
            this.space[i] = [];
            for (let j = 0; j < this.height; j++) {
                this.space[i][j] = new Mine(i, j);
            }
        }
    }

    private generateMines(): void {
        let minesCount = this.minesCount;
        while (minesCount !== 0) {
            const randomI = Math.floor(Math.random() * this.width);
            const randomJ = Math.floor(Math.random() * this.height);
            if (!this.space[randomI][randomJ].getMine()) {
                this.space[randomI][randomJ].setMine(true);
                minesCount--;
            }
        }
    }

    private generateDanger(): void {
        for (let i = 0; i < this.width; i++) {
            for (let j = 0; j < this.height; j++) {
                let danger = 0;
                if (i !== 0) {
                    if (this.space[i - 1][j].getMine()) {
                        danger++;
                    }
                }
                if (i !== this.width - 1) {
                    if (this.space[i + 1][j].getMine()) {
                        danger++;
                    }
                }
                if (j !== 0) {
                    if (this.space[i][j - 1].getMine()) {
                        danger++;
                    }
                }
                if (j !== this.height - 1) {
                    if (this.space[i][j + 1].getMine()) {
                        danger++;
                    }
                }

                if (j !== this.height - 1) {
                    if (i !== this.width - 1) {
                        if (this.space[i + 1][j + 1].getMine()) {
                            danger++;
                        }
                    }
                }
                if (j !== 0) {
                    if (i !== 0) {
                        if (this.space[i - 1][j - 1].getMine()) {
                            danger++;
                        }
                    }
                }
                if (j !== this.height - 1) {
                    if (i !== 0) {
                        if (this.space[i - 1][j + 1].getMine()) {
                            danger++;
                        }
                    }
                }
                if (j !== 0) {
                    if (i !== this.width - 1) {
                        if (this.space[i + 1][j - 1].getMine()) {
                            danger++;
                        }
                    }
                }
                this.space[i][j].setDanger(danger);
            }
        }
    }

    private expand(i: number, j: number): void {
        if (!this.space[i][j].isRevealed()) {
            this.space[i][j].setRevealed(true);
            this.revealedCount++;
            if (this.space[i][j].danger === 0) {
                if (i + 1 < this.width) {
                    this.expand(i + 1, j);
                }
                if (j + 1 < this.height) {
                    this.expand(i, j + 1);
                }
                if (i - 1 >= 0) {
                    this.expand(i - 1, j);
                }
                if (j - 1 >= 0) {
                    this.expand(i, j - 1);
                }
            }
        }
    }
}

export class IncompleteDataException extends Error {
    constructor(message?: string){
        super(message || 'Incomplete data')
    }
}
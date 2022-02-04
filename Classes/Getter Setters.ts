class GettersAndSetters {
    _length = 0;

    get length() {
        return this._length;
    }

    set length(newValue: number) {
        this._length = newValue;
    }
}

let NewGettersAndSetters = new GettersAndSetters();
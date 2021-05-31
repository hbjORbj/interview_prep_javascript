/*
Implement Buffer with the following api.

class Buffer {
	
	public Buffer(int capacity) {
	}


	// Transfers the content of the given source char array into this buffer.
	// Returns the the number of chars that were written into the buffer.

	public int write(char[] src) {
	}

	public char[] read(int n) {
	}
}

Example:

Buffer buf = new Buffer(5); // [. . . . .]
buf.write([abc]); // => 3 [abc . .]
buf.write([def]); // => 2 because the buffer is full, you can only write two chars [abcde]
buf.read(3); // => [abc] [. . . de]
buf.write([xyzabc]); // => 3 [xyzde]
buf.read(8); // returns [dexyz] becuase 'de' was written first [. . . . .]
*/

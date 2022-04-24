export default function chunkRight(str, size = 3) {
	if (typeof str === 'string') {
		const { length } = str;
		const chunks = Array(Math.ceil(length / size));

		if (length) {
			chunks[0] = str.slice(0, length % size || size);

			for (let i = 1, index = chunks[0].length; index < length; i++) {
				chunks[i] = str.slice(index, index += size);
			}
		}

		return chunks.join(',');
	}

	return str;
}

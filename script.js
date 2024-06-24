function analyzeFile() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (!file) {
        alert('Cambia de archivo compa');
        return;
    }

    const reader = new FileReader();
    reader.onload = function(event) {
        const content = event.target.result;
        const lines = content.split('\n');
        
        let totalLOC = 0;
        let sourceLOC = 0;
        let commentLOC = 0;
        let blankLOC = 0;

        lines.forEach(line => {
            totalLOC++;
            const trimmedLine = line.trim();
            if (trimmedLine === '') {
                blankLOC++;
            } else if (trimmedLine.startsWith('//') || trimmedLine.startsWith('#') || trimmedLine.startsWith('/*') || trimmedLine.startsWith('*') || trimmedLine.startsWith('*/')) {
                commentLOC++;
            } else {
                sourceLOC++;
            }
        });

        document.getElementById('totalLOC').innerText = totalLOC;
        document.getElementById('sourceLOC').innerText = sourceLOC;
        document.getElementById('commentLOC').innerText = commentLOC;
        document.getElementById('blankLOC').innerText = blankLOC;
    };

    reader.readAsText(file);
}

document.getElementById('checkBtn').addEventListener('click', () => {
    const textInput1 = document.getElementById('textInput1');
    const textInput2 = document.getElementById('textInput2');
    
    const input1 = textInput1.value.trim().toLowerCase();
    const input2 = textInput2.value.trim().toLowerCase();

    if (!input1 || !input2) {
        document.getElementById('result').textContent = 'Будь ласка, введіть обидві фрази.';
        return;
    }
    
    const words1 = input1.replace(/[.,!?;:—–\-]/g, '').split(/\s+/).filter(word => word.length > 0);
    
    const words2 = input2.replace(/[.,!?;:—–\-]/g, '').split(/\s+/).filter(word => word.length > 0);
    
    const set1 = new Set(words1);
    
    const set2 = new Set(words2);
    
    const commonWords = [...set1].filter(word => set2.has(word));
    
    const result = document.getElementById('result');
    
    if (commonWords.length > 0) {
        result.textContent = 'Спільні слова: ' + commonWords.join(', ');
        textInput1.value = '';
        textInput2.value = '';
    } else {
        result.textContent = 'Немає спільних слів.';
    }
});


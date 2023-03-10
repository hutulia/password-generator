export default class CopyTextToClipboardService {
    static copy(text){
        let input = document.createElement('input');
        input.value = text;
        input.select();
        input.setSelectionRange(0, 99999); // For mobile devices
        window.navigator.clipboard.writeText(input.value);
        input.remove();
    }
}
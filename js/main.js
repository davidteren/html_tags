function loadHTMLElements() {
    const htmlElements = new XMLHttpRequest();

    htmlElements.open('GET', 'js/elements.json', true);

    const el = htmlElements.onload = function () {
        if (this.status === 200) {
            console.log(this.responseText);

            const elements = JSON.parse(this.responseText);

            // console.log(elements)

            let output = '';

            function trueOrFalse(bool) {
                if(bool){
                    return "<span class='check-mark'>&#10003;</span>"
                }else {
                    return ""
                }
            }

            function nonHTML5(element) {
                if(element.html5_support !== true){
                    return `text-decoration: line-through #df8c33`
                }
            }

            elements.forEach(function (element) {

                output += `
                <tr>
                   <td class="type" style="${nonHTML5(element)}"><code class="el-type-font"><<span>${element.name}</span>></code></td>
                   <td class="description">${element.description}</td>
                   <td class="boolean"><span>${trueOrFalse(element.block_level_element)}</span></td>  
                   <td class="boolean"><span>${trueOrFalse(element.inline_element)}</span></td>
                   <td class="boolean"><span>${trueOrFalse(element.html5_support)}</span></td>
                </tr>
            `;
            });
            document.getElementById('htmlElements').innerHTML = output
            // console.log(output)
        }
    };
    htmlElements.send();

    return el()
}

loadHTMLElements();

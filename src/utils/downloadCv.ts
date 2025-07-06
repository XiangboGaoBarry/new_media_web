// src/utils/downloadCv.ts
export async function downloadCv(element: HTMLElement | null) {
    if (!element || typeof window === 'undefined') return;
    const html2pdf = (await import('html2pdf.js')).default;
    await html2pdf()
    .set({
        margin: [10, 12],
        filename: 'Xiangbo_Gao_CV.pdf',
        pagebreak: { mode: ['avoid-all', 'css'] },  // ← 关键
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4' }
    })
    .from(element)
    .save();
  }
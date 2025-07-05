// src/utils/downloadCv.ts
export async function downloadCv(element: HTMLElement | null) {
    if (!element || typeof window === 'undefined') return;
    const html2pdf = (await import('html2pdf.js')).default;
    await html2pdf()
      .set({ margin: 10, filename: 'Xiangbo_Gao_CV.pdf',
             html2canvas: { scale: 2 },
             jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' } })
      .from(element)
      .save();
  }
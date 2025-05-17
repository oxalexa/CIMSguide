'use client';

import { useEffect, useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import UserGuidePDF from './UserGuidePDF';

export default function SaveAsPDFButton() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => { setIsClient(true); }, []);
  if (!isClient) return null;

  return (
    <div className="flex justify-end mb-4 print:hidden">
      <PDFDownloadLink
        document={<UserGuidePDF />}
        fileName="CIMS_User_Guide.pdf"
        className="inline-block px-4 py-2 bg-secondary text-white rounded shadow hover:bg-secondary/80 transition"
      >
        {({ loading }: { loading: boolean }) => loading ? 'Preparing PDF...' : 'Save as PDF'}
      </PDFDownloadLink>
    </div>
  );
}

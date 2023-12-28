'use client';

import { useParams } from 'next/navigation';
import { useOrganizationList } from '@clerk/nextjs';
import { useEffect } from 'react';

export const OrgControl = () => {
  const { organizationId } = useParams();
  const { setActive } = useOrganizationList();

  useEffect(() => {
    if (!setActive) return;
    setActive({
      organization: organizationId as string,
    });
  }, [setActive, organizationId]);

  return null;
};

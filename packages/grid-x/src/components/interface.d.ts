type GridXRecord = Record<string, any>;

interface GridXProps<T extends GridXRecord> {
  data?: T[];
  onDataChange?(data: T[]): void;
}

interface GridXRowProps {}

interface GridXCellProps {}

import { useState, useEffect } from "react";
import {
    RadioGroup,
    Table,
    TableBody,
    TableRow,
    TableCell,
    Radio,
} from "@mui/material";

export default function ToggleGroupField({ addData = null, ...props }) {
    const [data, setData] = useState(
        props.default ?? { id: null, label: null }
    );

    function updateValue(op) {
        setData(op);
        addData?.(props.id, op);
    }

    return (
        <Table
            size="small"
            sx={{
                width: "100%",
                borderCollapse: "collapse",
                "& td": { paddingY: 0, paddingX: 0 },
                "& tr:last-child td": { borderBottom: 0 },
                "& td, & th": { borderBottom: "none" },
            }}
        >
            <TableBody>
                {props.options.map((op) => {
                    const checked = data?.id === op.id;

                    return (
                        <TableRow
                            key={op.id}
                            hover
                            sx={{ cursor: "pointer" }}
                            onClick={() => updateValue(op)}
                        >
                            <TableCell sx={{ fontSize: 14 }}>
                                {op.label}
                            </TableCell>
                            <TableCell align="right">
                                <Radio
                                    checked={checked}
                                    onClick={(e) => e.stopPropagation()}
                                    size="small"
                                />
                            </TableCell>
                        </TableRow>
                    );
                })}
            </TableBody>
        </Table>
    );
}
